import React, { useState, useRef } from 'react';
import { Mic, Square, Play, Pause, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const VoiceDemo = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const audioRef = useRef(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/mp3' });
        const url = URL.createObjectURL(audioBlob);
        setAudioURL(url);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Please allow microphone access to record your voice.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
  };

  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const resetRecording = () => {
    setAudioURL(null);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <div className="mt-12 max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold mb-6">Record Your Voice Sample</h3>
          
          <div className="flex justify-center items-center space-x-4">
            {/* Recording Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={isRecording ? stopRecording : startRecording}
              className={`p-4 rounded-full ${
                isRecording ? 'bg-red-500' : 'bg-indigo-600'
              } text-white`}
            >
              {isRecording ? (
                <Square className="h-6 w-6" />
              ) : (
                <Mic className="h-6 w-6" />
              )}
            </motion.button>

            {/* Playback Controls */}
            {audioURL && (
              <>
                <motion.button
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={togglePlayback}
                  className="p-4 rounded-full bg-indigo-600 text-white"
                >
                  {isPlaying ? (
                    <Pause className="h-6 w-6" />
                  ) : (
                    <Play className="h-6 w-6" />
                  )}
                </motion.button>

                <motion.button
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetRecording}
                  className="p-4 rounded-full bg-gray-600 text-white"
                >
                  <RotateCcw className="h-6 w-6" />
                </motion.button>
              </>
            )}
          </div>

          {/* Status Text */}
          <AnimatePresence mode="wait">
            <motion.p
              key={isRecording ? 'recording' : 'ready'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-4 text-gray-600"
            >
              {isRecording ? (
                <span className="text-red-500 flex items-center justify-center">
                  <span className="animate-pulse mr-2">●</span> Recording...
                </span>
              ) : (
                audioURL ? 'Ready to play!' : 'Click the microphone to start recording'
              )}
            </motion.p>
          </AnimatePresence>

          {/* Hidden Audio Element */}
          <audio
            ref={audioRef}
            src={audioURL}
            onEnded={() => setIsPlaying(false)}
            className="hidden"
          />
        </motion.div>
      </div>
    </div>
  );
};