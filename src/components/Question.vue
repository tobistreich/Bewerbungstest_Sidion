<script setup>
    import {defineEmits} from "vue"

    const emit = defineEmits(["selectOption"])

    const {question} = defineProps(['question'])
    const emitSelectedOption = (isCorrect) => {
        emit("selectOption", isCorrect)
    }
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
            @click="emitSelectedOption(option.isCorrect)"
            >
                <p class="option-label">{{ option.label }}</p>
                <div class="option-value">
                    <p>{{ option.text }}</p>
                </div>
            </div>
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
    }
</style>