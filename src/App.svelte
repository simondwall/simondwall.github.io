<script lang="ts">
    import Card from "./Card.svelte";
    import Timeline from "./Timeline.svelte";
    import Bible from "./cards/Bible.svelte";
    import Interpreter from "./cards/Interpreter.svelte";
    import Keyboard from "./cards/Keyboard.svelte";
    import Location from "./cards/Location.svelte";
    import Married from "./cards/Married.svelte";
    import NeuralNetwork from "./cards/NeuralNetwork.svelte";
    import TerminalWhichKey from "./cards/TerminalWhichKey.svelte";

    let dark_mode = false;

    $: if (dark_mode) {
        document.documentElement.style.cssText = `
        --text: #ffffff;
        --background: #090c0b;
        --primary: #3f554e;
        --secondary: #27463e;
        --accent: #9ac3b8;
        `;
    } else {
        document.documentElement.style.cssText = `
        --text: #090c0b;
        --background: #ffffff;
        --primary: #3e564f;
        --secondary: #d3dfdc;
        --accent: #497b6e;
        `;
    }
</script>

<button
    id="theme-switch"
    class="material-symbols-outlined"
    on:click={() => (dark_mode = !dark_mode)}
>
    {#if dark_mode}
        dark_mode
    {:else}
        light_mode
    {/if}
</button>

<h1>Simon D. Wall</h1>
<h2>Some Facts About Me</h2>
<div id="cards-container">
    <Bible />
    <Married />
    <Location />
</div>

<h2>Academic Achievements</h2>
<Timeline />

<h2>Career</h2>

<h2>Personal Projects</h2>
<div id="cards-container">
    <Interpreter />
    <TerminalWhichKey />
</div>
<div id="cards-container">
    <Keyboard />
    <NeuralNetwork />
</div>

<link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>

<style>
    :global(:root) {
        background: var(--background);
        color: var(--text);
    }

    h1 {
        font-family: sans-serif;
        font-size: 10vmin;
        font-weight: lighter;
        margin: auto;
        padding: 5rem;
        width: max-content;
    }

    h2 {
        font-family: sans-serif;
        font-size: 5vmin;
        font-weight: lighter;
        margin: auto;
        padding: 3rem;
        width: max-content;
    }

    #theme-switch {
        width: 3rem;
        height: 3rem;
        border-radius: 3rem;
        border: none;
        position: fixed;
        z-index: 1;

        background: var(--secondary);
        color: var(--text);
    }
    #theme-switch:hover {
        border: 5px solid var(--primary);
    }
    #theme-switch:active {
        background: var(--text);
        color: var(--background);
    }

    #cards-container {
        width: max-content;
        margin: auto;
        padding-bottom: 3rem;
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
    @media only screen and (min-width: 1200px) {
        #cards-container {
            flex-direction: row;
        }
    }
</style>
