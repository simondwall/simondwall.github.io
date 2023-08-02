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
                    d="M28.47,18.116l2.886,2.27l4.107,0.197l3.554,-1.655l2.528,-2.218l1.171,-2.439"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M24.265,27.315l1.516,1.006c-0,-0 4.937,5.449 8.192,7.309c3.255,1.859 4.289,1.76 4.289,1.76c2.313,-3.251 3.862,-5.909 3.037,-8.733l1.83,-0.694l0.398,0.654c0.441,2.458 3.197,4.595 3.197,4.595c0.229,-4.211 1.585,-8.034 3.275,-11.743l0.612,-1.756"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M28.109,32.692c-11.169,3.561 -17.921,11.535 -14.775,21.649c3.146,10.115 13.121,16.217 17.012,18.25c2.104,1.099 10.404,6.338 26.573,7.954c15.405,1.54 23.352,-4.601 26.426,-8.065c2.889,-3.255 4.879,-11.651 2.013,-16.831c-2.867,-5.18 -6.199,-10.519 -14.114,-15.455c-7.915,-4.935 -16.282,-7.215 -21.877,-8.28c0.4,0.081 -1.06,-3.176 2.78,-10.224l0.169,-1.748l-1.726,-0.159l-0.063,-2.325l-1.359,-2.594l-0.567,-0.284l0.282,-1.332l-1.282,-0.551l-1.218,0.771l-0.471,-0.236l-5.694,-1.367l-6.045,0.588l-3.767,1.925l-4.666,3.943l-0.855,1.811l-0.521,-0.432l-1.507,0.079l-0.855,1.601l1.637,1.39l-0.574,1.217l1.232,3.514l-1.076,1.237l1.13,0.927c0,-0 3.437,2.324 3.758,3.027Z"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M80.311,64.753c-0.305,-3.811 -5.682,-16.808 -25.361,-22.096c-22.533,-6.056 -30.524,-0.906 -33.71,1.611c-1.338,1.058 -2.737,3.297 -2.737,3.297"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M19.528,46.11c0,-0 -4.278,9.577 13.574,21.285c5.422,3.556 14.819,7.381 26.018,7.137c18.804,-0.41 21.1,-10.607 21.1,-10.607"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M28.08,29.757l4.105,0.88l6.461,-0.595"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
            {/if}
        </svg>
    </span>
    <span slot="icon">group</span>
    <span slot="heading">Happily Married</span>
    <span slot="text" />
</Card>
