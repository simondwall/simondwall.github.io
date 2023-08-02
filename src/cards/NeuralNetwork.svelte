<script lang="ts">
    import { draw } from "svelte/transition";

    import Card from "../Card.svelte";

    let visible = false;
</script>

<Card bind:visible>
    <span slot="image">
        <svg width="100%" height="100%" viewBox="0 0 96 96">
            <circle
                cx="41"
                cy="65"
                r="30"
                fill="color-mix(in srgb, var(--background) 25%, var(--secondary))"
            />
            <circle
                cx="55"
                cy="31"
                r="25"
                fill="color-mix(in srgb, var(--background) 75%, var(--secondary))"
            />
            {#if visible}
                <path
                    d="M57.504,72.437c0,-0 -1.041,1.096 -1.279,2.156c0,0 -6.327,0.25 -8.076,-0.944c-0,0 -1.196,-1.533 -0.913,-3.457c0,0 -3.134,-2.15 -3.427,-4.661c0,-0 -4.597,-0.529 -7.306,1.594c0,-0 -4.192,1.037 -5.319,-2.025c0,0 -3.63,0.245 -3.033,-2.654c-0,0 -2.545,-2.116 -2.036,-4.653c-0,-0 -3.452,-1.368 -6.738,-0.226c-3.286,1.142 -6.924,-3.329 -5.608,-5.362c0,0 -3.84,-1.854 -0.987,-5.207c0,-0 -1.588,-5.905 3.236,-9.694c-0,0 -0.966,-4.572 4.113,-5.444c0,-0 -0.393,-3.787 6.923,-3.819c0,0 0.785,-1.572 4.817,-2.449c0,-0 0.081,-2.694 3.811,-3.346c3.729,-0.651 5.167,-0.516 7.246,-1.111c2.079,-0.596 2.301,1.018 2.301,1.018c0,0 0.176,-3.479 7.561,-1.247c-0,-0 4.005,-1.124 4.48,0.498c-0,0 3.122,-0.821 4.306,0.998c0,-0 5.783,0.288 7.494,3.66c0,-0 3.39,0.703 4.348,3.721c-0,0 3.645,3.425 4.32,6.016c-0,-0 1.322,0.308 2.44,2.683c-0,-0 2.467,1.877 2.324,5.177c0,-0 4.323,2.521 1.429,7.515c0,0 0.601,3.763 -1.337,4.694c-0,0 0.504,4.242 -4.591,4.942c-0,-0 -0.581,0.68 -0.129,1.619c0.955,1.982 -2.757,10.384 -11.221,11.441c-6.852,0.855 -9.149,-1.433 -9.149,-1.433Z"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
            {/if}
        </svg>
    </span>
    <span slot="icon">neurology</span>
    <span slot="heading">Perceptron Network</span>
    <span slot="text">
        As a school project I wrote a perceptron network for recognizing handwritten Digits.
    </span>
</Card>
