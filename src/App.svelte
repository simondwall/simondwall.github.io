<script lang="ts">
    /* import Background from "./Background.svelte"; */
    import Header from "./Header.svelte";
</script>

<div id=background>
    <!--
    <Background />
    -->
</div>

<div class=scroll-container>
    <div class=full-screen-div>
        <Header/>
    </div>

    <div class=full-screen-div>
        <h1 class=section>General</h1>
    </div>

    <div class=full-screen-div>
        <h1 class=section>Education</h1>
    </div>

    <div class=full-screen-div>
        <h1 class=section>Career</h1>
    </div>

    <div class=full-screen-div>
        <h1 class=section>Skills</h1>
    </div>

    <div class=full-screen-div>
        <h1 class=section>Projects</h1>
    </div>

    <div class=full-screen-div>
        <h1 class=section>Setup Preference</h1>
    </div>

    <div class=full-screen-div>
        <h1 class=section>Hobbies</h1>
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css?family=JetBrains+Mono');

    :global(body) {
        margin: 0;
    }

    .section {
        font-family: 'JetBrains Mono', monospace;
        text-align: center;
        margin: 0;
    }

    .scroll-container {
        position: relative;
        scroll-snap-type: y mandatory;
        height: 100vh;
        overflow-y: scroll;
    }

    .full-screen-div {
        width: 100vw;
        height: 100vh;
        margin: 0;

        scroll-snap-align: start;
        /* only supported in Chrome */
        scroll-snap-stop: always;
    }

    #background {
        position: absolute;
        width: 100vw;
        height: 100vh;
    }
</style>
