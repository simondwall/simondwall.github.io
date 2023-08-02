<script lang="ts">
    import viewport from "./useViewportAction";

    export let visible = false;
</script>

<div id="container">
    <!--
    <div id="icon">
        <span class="material-symbols-outlined">
            <slot name="icon">error</slot>
        </span>
    </div>
    -->
    <div id="image">
        <div
            use:viewport
            on:enterViewport={() => visible = true}
            on:exitViewport={() => visible = false}
        >
            <slot name="image">No Image</slot>
        </div>
    </div>
    <h3><slot name="heading">No Heading</slot></h3>
    <p><slot name="text">No Text</slot></p>
</div>

<style>
    #image {
        padding: 1rem;
        width: 50%;
        margin: auto;
    }

    #icon {
        background: var(--accent);
        width: 3rem;
        height: 3rem;
        padding: 0.5rem;
        border-radius: 3rem;
        position: absolute;
        translate: -2rem -2rem;
    }

    #icon>span {
        font-size: 3rem;
        color: var(--background);
    }

    #container {
        padding: 1rem;
        border-radius: 1rem;
        background: color-mix(in srgb, var(--secondary) 50%, var(--background));
        width: 80vw;
    }
    @media only screen and (min-width: 600px) {
        #container {
            width: 40vw;
        }
    }
    @media only screen and (min-width: 1200px) {
        #container {
            width: 20vw;
        }
    }

    h3 {
        font-family: sans-serif;
        font-weight: 100;
        width: max-content;
        margin-left: auto;
        margin-right: auto;
        margin-top: 1rem;
        margin-bottom: 1rem;
        box-shadow: 0px 5px 0px var(--accent);
    }

    p {
        padding: 1rem;
        font-family: sans-serif;
    }
</style>
