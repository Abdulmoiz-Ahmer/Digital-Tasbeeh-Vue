import { ref } from 'vue';
import play from './utils';

export const useCounter = (count = 0) => {
  const counter = ref(count);

  function setCount(count) {
    play('/start.mp3');
    counter.value = count;
  }

  function updateCount() {
    play('/start.mp3');
    counter.value = counter.value + 1;
  }

  function resetCount() {
    play('/stop.mp3');
    counter.value = 0;
  }

  return {
    counter,
    updateCount,
    resetCount,
    setCount,
  };
};
