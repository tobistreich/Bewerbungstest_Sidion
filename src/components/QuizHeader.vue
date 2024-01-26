<script setup>
    const {
        questionStatus,
        barPercentage
    } = defineProps([
        "questionStatus",
        "barPercentage"
    ])
</script>

<template>
    <header>
        <h4>Frage {{ questionStatus }}</h4>
        <div class="bar">
            <div class="completion" :style="{width: barPercentage}"></div>
        </div>
    </header>
</template>

<style scoped>
    header {
        margin: 20px;
    }

    header h4 {
        font-size: 30px;
    }

    .bar {
        width: 300px;
        height: 50px;
        border: 3px solid #0064c0;
        border-radius: 12.5px;
    }

    .completion {
        height: 100%;
        width: 0%;
        background-color: #0064c0;
        border-radius: 5px;
    }
</style>