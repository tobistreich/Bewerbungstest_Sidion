<script setup>
    import Question from "../components/Question.vue"
    import QuizHeader from "../components/QuizHeader.vue"
    import {useRoute} from "vue-router"
    import {ref, watch, computed} from "vue"
    import questions from "../data/questions.json"
    import Result from "../components/Result.vue"
    
    const quiz = questions.find(q => q.id === 1)
    const currentQuestionIndex = ref(0)
    const numberOfCorrectAnswers = ref(0)
    const showResult = ref(false)

    const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz.questions.length}`)

    const barPercentage = computed(() => `${currentQuestionIndex.value/quiz.questions.length * 100}%`)
    const onOptionSelected = (isCorrect) => {
        if(isCorrect) {
            numberOfCorrectAnswers.value++
        }

        if(quiz.questions.length -1 === currentQuestionIndex.value){
            showResult.value = true
        }

        currentQuestionIndex.value++
    }
</script>

<template>
    <div>
        <QuizHeader
            :questionStatus="questionStatus"
            :barPercentage="barPercentage"
            id="quiz-header"
        />
        <div>
            <Question 
                v-if="!showResult"
                :question="quiz.questions[currentQuestionIndex]"
                @selectOption="onOptionSelected"
            />
            <Result
                v-else
                :quizQuestionLength="quiz.questions.length"
                :numberOfCorrectAnswers="numberOfCorrectAnswers"
            />
        </div>
    </div>
    
</template>

<style>
#quiz-header {
    display: flex;
    flex-direction: column;
    margin: 2rem auto;
}
</style>