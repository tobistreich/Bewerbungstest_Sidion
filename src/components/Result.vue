<script setup>
    const {numberOfCorrectAnswers, quizQuestionLength} = defineProps(["quizQuestionLength", "numberOfCorrectAnswers"])
</script>

<template>
    <div class="results">
        <p>Dein Ergebnis ...</p>
        <h1>{{ numberOfCorrectAnswers }}/{{ quizQuestionLength }}</h1>
    </div>
</template>

<style scoped>
    .results {
        text-align: center;
        padding: 100px 0;
    }

    p {
        font-size: 25px;
    }

    h1 {
        font-size: 80px;
    }
</style>