<script lang="ts">
    import { draw } from "svelte/transition";

    import Card from "../Card.svelte";

    let visible = false;
</script>

<Card bind:visible>
    <span slot="image">
        <svg width="100%" height="100%" viewBox="0 0 96 96">
            <circle
                cx="55"
                cy="65"
                r="30"
                fill="color-mix(in srgb, var(--background) 25%, var(--secondary))"
            />
            <circle
                cx="41"
                cy="31"
                r="25"
                fill="color-mix(in srgb, var(--background) 75%, var(--secondary))"
            />
            {#if visible}
                <path
                    d="M3.852,43.324c-0.569,-1.486 0.362,-1.753 1.074,-1.993l3.794,-4.264c6.766,-0.943 13.867,-2.626 22.086,-6.781c0,0 6.181,-2.247 8.204,1.785c0,0 2.009,-4.821 8.296,-4.459c5.688,0.327 14.444,1.403 22.14,0.462l2.207,4.085c-0,-0 0.648,-0.276 1.147,0.473l21.651,30.521c0,0 0.508,1.367 -0.812,1.265c-0,0 -27.51,-1.658 -32.252,-0.996c0,0 -3.203,2.446 -7.238,0.564c0,0 -32.666,4.523 -37.075,5.503c-0,-0 -2.994,0.861 -4.007,-1.4c0,-0 -8.646,-23.278 -9.215,-24.765Z"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M39.016,32.114l18.306,30.06c0,0 1.982,-5.366 8.736,-5.312c6.755,0.053 7.606,3.25 23.213,1.849c0,-0 0.565,1.86 2.552,3.128"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M87.163,56.004l-15.038,-21.963"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M54.31,59.109c-1.001,-0.453 -2.763,-0.987 -5.513,-1.002c-4.79,-0.025 -16.754,5.131 -27.997,5.922l-11.828,-25.392"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M15.886,67.973c-0,0 3.236,-1.593 4.082,-3.17"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
            {/if}
        </svg>
    </span>
    <span slot="icon">church</span>
    <span slot="heading">Disciple of God</span>
    <span slot="text" />
</Card>
