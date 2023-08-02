<script lang="ts">
    export let items = [
        {"year": "2006 - 2019", "heading": "School", "content": "this was my time in school and there is not really a lot to say about that"},
        {"year": "2016", "heading": "Student Exchange", "content": ""},
        {"year": "2019 - 2024", "heading": "University", "content": ""},
    ];

    let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<div id="container">
    {#each items as item, i}
        {#if i % 2 === 0}
            <div class="time left">{item.year}</div>
            <h3 class="left">{item.heading}</h3>
        {:else}
            <h3 class="right">{item.heading}</h3>
            <div class="time right">{item.year}</div>
        {/if}
    {/each}
</div>

<style>
    #container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        margin-bottom: 3rem;
    }

    .time {
        font-family: sans-serif;
        font-size: 3rem;
        font-weight: lighter;
    }

    h3 {
        font-family: sans-serif;
        font-weight: 100;
        width: max-content;
        margin-top: 1rem;
        margin-bottom: 1rem;
        box-shadow: 0px 5px 0px var(--accent);
    }

    .left {
        text-align: right;
    }
    h3.right {
        margin-left: auto;
    }
</style>
