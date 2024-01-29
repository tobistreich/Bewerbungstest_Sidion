<script setup>
    import {defineEmits} from "vue"

    const emit = defineEmits(["submit"])

    const {question} = defineProps(['question'])
    const emitSubmit = (inputUserAnswers) => {
        emit("submit", inputUserAnswers)
    }
    const inputUserAnswers = []
</script>

<template>
    <div class="question-container">
            <h1 class="question">{{ question.text }}</h1>
        </div>
        <div class="options-container">
            <div 
            v-for="option in question.options"
            :key="option.id"
            class="option"
            >
                <div class="option-value">
                    <p>{{ option.text }}</p>
                    <input 
                    class="input-area"
                    type="text" 
                    v-model="inputUserAnswers[option.id-1]"
                    >
                </div>
            </div>
            <button
            class="submit-button"
            @click="emitSubmit(inputUserAnswers)"
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

    .option-label {
        background-color: #0064c0;
        width: 50px;
        height: 50px;
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 7.5px;
    }

    .option-value {
        background-color: #f0f0f0;
        width: 100%;
        font-size: 30px;
        padding: 0 20px;
        border-radius: 7.5px;
        .input-area {
            background-color: #fff;
            width: 100%;
            font-size: 30px;
            padding: 0 20px;
            border-radius: 7.5px;
        }
    }
</style>