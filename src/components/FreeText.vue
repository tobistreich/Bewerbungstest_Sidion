<script setup>
    import {defineEmits} from "vue"

    const emit = defineEmits(["submit"])

    const {question} = defineProps(['question'])
    const emitSubmit = (inputUserAnswer) => {
        emit("submit", inputUserAnswer)
    }

    const inputUserAnswer = ""
</script>

<template>
    <div class="question-container">
            <h1 class="question">{{ question.text }}</h1>
        </div>
        <div class="options-container">
            <input 
            class="input-area"
            type="text" 
            v-model="inputUserAnswer"
            >
            <br>
            <br>
            <button
            class="submit-button"
            @click="emitSubmit(inputUserAnswer)"
            type="button"
            >Weiter</button>
        </div>
</template>

<style scoped>
.question-container {
        margin-top: 20px;
    }

    .question {
        font-size: 40px;
        margin-bottom: 20px;
    }

    .option {
        display: flex;
        margin-bottom: 20px;
        cursor: pointer;
    }

    .submit-button {
        background-color: #0064c0;
        height: 50px;
        font-size: 30px;
        align-items: center;
        justify-content: center;
        border-radius: 7.5px;
    }

    .input-area {
        background-color: #f0f0f0;
        width: 100%;
        font-size: 30px;
        padding: 0 20px;
        border-radius: 7.5px;
    }
</style>