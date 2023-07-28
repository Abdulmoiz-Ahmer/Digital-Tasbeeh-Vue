<script setup>
import { useCounter } from './useCounter';
import { getValueFromLocalStorage, setValueInLocalStorage } from './utils';

const { counter, updateCount, resetCount, setCount } = useCounter(0);

function saveProgress() {
  setValueInLocalStorage('progress', counter.value);
}

function RetrieveProgress() {
  const currentVal = getValueFromLocalStorage('progress', 0);
  console.log(currentVal);
  setCount(currentVal);
}
</script>

<template>
  <main class="main">
    <section class="main-top">
      <h3 class="main-top-counter">{{ counter }}</h3>
      <a
        class="main-top-count-button"
        href="#"
        rel="noopener noreferrer"
        @click="updateCount"
      >
        +
      </a>
    </section>
    <section class="main-end">
      <a href="/#" class="main-end-button" @click="resetCount"> Reset </a>
      <a href="/#" class="main-end-button" @click="saveProgress">
        Save Progress
      </a>
      <a href="/#" class="main-end-button" @click="RetrieveProgress">
        Retrieve Previous Progress
      </a>
    </section>
  </main>
</template>

<style scoped>
.main {
  width: 100%;
  min-height: 470px;
  height: 100vh;
  color: #ffffff;
}

.main-top {
  background-color: #14c38e;
  padding: 10px;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.main-end {
  padding: 5%;
  height: 40%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f3f3ee;
}

.main-top-count-button {
  font-size: 50px;
  font-weight: 900;
  text-decoration: none;
  padding: 20px 35px;
  margin: 10px 20px;
  border-radius: 100%;
  background-color: #00ffab;
  color: #ffffff;
  box-shadow: 0px 0px 100px 35px rgba(6, 157, 112, 0.8);
  -webkit-box-shadow: 0px 0px 100px 35px rgba(6, 157, 112, 0.8);
  -moz-box-shadow: 0px 0px 100px 35px rgba(6, 157, 112, 0.8);
  align-self: flex-end;
  z-index: 500;
}

.main-top-count-button:active {
  z-index: 0;
  box-shadow: 0px 0px 100px 20px rgba(6, 157, 112, 0.8);
  -webkit-box-shadow: 0px 0px 100px 20px rgba(6, 157, 112, 0.8);
  -moz-box-shadow: 0px 0px 100px 20px rgba(6, 157, 112, 0.8);
  align-self: flex-end;
}

.main-top-counter {
  font-size: 150px;
}

.main-end-button {
  width: 220px;
  text-align: center;
  background-color: #ffffff;
  color: #14c38e;
  display: inline-block;
  text-decoration: none;
  padding: 50px 70px;
  border-radius: 25px;
  -webkit-box-shadow: 12px 10px 5px 0px rgba(232, 231, 222, 1);
  -moz-box-shadow: 12px 10px 5px 0px rgba(232, 231, 222, 1);
  box-shadow: 12px 10px 5px 0px rgba(232, 231, 222, 1);
}

@media screen and (max-width: 768px) {
  .main {
    height: max-content;
  }

  .main-end {
    flex-direction: column;
    gap: 30px;
  }
}

@media screen and (max-width: 511px) {
  .main-top {
    padding-bottom: 80px;
  }
}
</style>
