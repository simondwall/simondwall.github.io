<script lang="ts">
    import { draw } from 'svelte/transition';
    import { onMount } from 'svelte';

    let date = new Date();
    let loaded = false;
    let big_window = window.innerWidth >= 480;
    
    onMount(() => loaded = true);

    window.matchMedia("(min-width: 480px)").addEventListener("change", q => {
        if (q.matches) {
            big_window = true;
        } else {
            big_window = false;
        }
    });
</script>

<div>
    <div class="title">
        {#if loaded}
            <svg width="100%" viewBox="0 0 600 200">
                <text x="300" y="50" fill="black" font-family="Germania One" font-size="100" text-anchor="middle" alignment-baseline="middle">The Wall Post</text>

                <path d="M 300 90 Q 150 120 5 90" fill="#0000" stroke="black" stroke-width="10" stroke-linecap="round" in:draw="{{duration: 1000, delay: 1000}}" />
                <path d="M 300 90 Q 450 120 595 90" fill="#0000" stroke="black" stroke-width="10" stroke-linecap="round" in:draw="{{duration: 1000, delay: 1000}}" />
                <path d="M 300 110 Q 170 140 40 107" fill="#0000" stroke="black" stroke-width="10" stroke-linecap="round" in:draw="{{duration: 1000, delay: 1200}}" />
                <path d="M 300 110 Q 430 140 560 107" fill="#0000" stroke="black" stroke-width="10" stroke-linecap="round" in:draw="{{duration: 1000, delay: 1200}}" />
                <path d="M 300 130 Q 200 160 100 130" fill="#0000" stroke="black" stroke-width="10" stroke-linecap="round" in:draw="{{duration: 1000, delay: 1400}}" />
                <path d="M 300 130 Q 400 160 500 130" fill="#0000" stroke="black" stroke-width="10" stroke-linecap="round" in:draw="{{duration: 1000, delay: 1400}}" />
                <path d="M 300 150 Q 220 180 140 150" fill="#0000" stroke="black" stroke-width="10" stroke-linecap="round" in:draw="{{duration: 1000, delay: 1600}}" />
                <path d="M 300 150 Q 380 180 460 150" fill="#0000" stroke="black" stroke-width="10" stroke-linecap="round" in:draw="{{duration: 1000, delay: 1600}}" />

                <path d="M 300 85 Q 300 100 250 110 Q 250 170 300 190 Q 350 170 350 110 Q 300 100 300 85" in:draw="{{duration: 1000}}" fill="black" stroke="white" stroke-width="20" />
                <path d="M 300 85 Q 300 100 250 110 Q 250 170 300 190 Q 350 170 350 110 Q 300 100 300 85" in:draw="{{duration: 1000}}" fill="#0000" stroke="black" stroke-width="10" />
            </svg>
        {/if}
    </div>
    <div class="issue">
        <div>
            {#if date.getDay() == 0}
                Sunday
            {:else if date.getDay() == 1}
                Monday
            {:else if date.getDay() == 2}
                Tuesday
            {:else if date.getDay() == 3}
                Wednesday
            {:else if date.getDay() == 4}
                Thursday
            {:else if date.getDay() == 5}
                Friday
            {:else if date.getDay() == 6}
                Saturday
            {/if},
            {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
        </div>
        {#if big_window}
            <div style="justify-self: center">Today's Issue by Simon D. Wall</div>
        {/if}
        <div style="justify-self: end">Issue No. 1</div>
    </div>
</div>

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Germania+One" />
<style>
    .title {
        width: 90vw;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (min-width: 480px) {
        .title {
            width: 30vw;
        }
    }

    .issue {
        border-top: 2px solid black;
        border-bottom: 2px solid black;

        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width: 480px) {
        .issue {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
</style>
