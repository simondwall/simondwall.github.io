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
                    d="M20.193,53.54c-0,-0 -0.103,-0.151 -0.125,-0.183c-0.003,-0.004 -0.004,-0.008 -0.004,-0.013c-0,-0.018 -0.001,-0.066 -0.001,-0.111c-0.001,-0.054 0.028,-0.105 0.075,-0.131c0.072,-0.041 0.166,-0.095 0.166,-0.095c0,0 0.329,-0.145 0.493,-0.217c0.06,-0.026 0.121,-0.049 0.184,-0.069c1.095,-0.348 11.412,-3.622 12.711,-4.034c0.09,-0.028 0.181,-0.05 0.273,-0.064c0.055,-0.009 0.118,-0.018 0.172,-0.027c0.091,-0.014 0.183,-0.021 0.276,-0.021c0.035,-0 0.073,-0 0.111,-0.001c0.147,0 0.293,0.017 0.436,0.052c0.013,0.003 0.026,0.006 0.038,0.009c0.092,0.022 0.181,0.052 0.268,0.088c2.398,0.992 36.966,15.297 36.966,15.297c0,0 0.05,0.03 0.109,0.064c0.117,0.07 0.206,0.178 0.252,0.307c0.012,0.032 0.02,0.055 0.02,0.055l-0.095,0.147l-14.014,7.618l-0.282,0.072c-0,0 -0.019,0.002 -0.047,0.004c-0.163,0.014 -0.327,-0.006 -0.482,-0.061c-0.055,-0.02 -0.099,-0.035 -0.099,-0.035l-37.401,-18.651Z"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M74.753,61.83c0.469,0.186 0.995,0.17 1.452,-0.044c0.457,-0.215 0.805,-0.608 0.962,-1.088c2.321,-7.087 10.575,-32.292 11.683,-35.676c0.081,-0.247 0.096,-0.51 0.043,-0.765c-0.028,-0.136 -0.053,-0.256 -0.053,-0.256c0,0 -0.047,-0.071 -0.112,-0.168c-0.224,-0.335 -0.572,-0.569 -0.967,-0.649c-0.073,-0.015 -0.122,-0.025 -0.122,-0.025l-41.846,-6.882c0,-0 -0.081,0.026 -0.187,0.06c-0.321,0.104 -0.588,0.331 -0.743,0.63c-0.045,0.089 -0.079,0.154 -0.079,0.154c-0,0 -6.251,21.729 -8.016,27.864c-0.26,0.905 0.209,1.86 1.084,2.207c6.308,2.502 30.125,11.95 36.901,14.638Z"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M35.222,47.677c0.083,0.009 0.165,-0.016 0.228,-0.07c0.063,-0.053 0.101,-0.13 0.105,-0.213c0.002,-0.053 0.005,-0.108 0.007,-0.158c0.007,-0.145 0.031,-0.288 0.071,-0.427c0.735,-2.514 7.856,-26.878 8.882,-30.389c0.08,-0.274 0.244,-0.515 0.47,-0.689c-0,-0 -0,-0 -0,-0c0.137,-0.106 0.298,-0.178 0.468,-0.21c0.048,-0.009 0.098,-0.018 0.146,-0.027c0.19,-0.036 0.385,-0.038 0.576,-0.006c3.482,0.571 37.412,6.144 42.239,6.936c0.372,0.061 0.715,0.235 0.984,0.498c0.011,0.011 0.022,0.022 0.033,0.033c0.323,0.316 0.518,0.741 0.547,1.192c0.001,0.026 0.003,0.051 0.005,0.076c0.014,0.23 -0.015,0.46 -0.085,0.679c-1.135,3.509 -10.92,33.771 -12.533,38.757c-0.144,0.446 -0.453,0.819 -0.864,1.043c-0.066,0.036 -0.131,0.072 -0.193,0.106c-0.273,0.149 -0.469,0.407 -0.539,0.71c-0.026,0.111 -0.046,0.198 -0.046,0.198c0,-0 -0.088,0.106 -0.176,0.212c-0.115,0.139 -0.256,0.255 -0.414,0.341c-2.62,1.417 -25.849,13.985 -28.676,15.515c-0.186,0.1 -0.388,0.168 -0.597,0.2c-0.128,0.019 -0.27,0.04 -0.38,0.057c-0.125,0.019 -0.252,0.025 -0.378,0.018c-0.169,-0.01 -0.418,-0.024 -0.595,-0.034c-0.141,-0.008 -0.28,-0.032 -0.415,-0.072c-0.166,-0.049 -0.398,-0.118 -0.566,-0.168c-0.142,-0.042 -0.278,-0.101 -0.405,-0.175c-0.267,-0.156 -0.727,-0.425 -0.805,-0.471c-0.007,-0.004 -0.015,-0.009 -0.022,-0.013c-0.701,-0.424 -33.721,-20.387 -37.605,-22.736c-0.243,-0.146 -0.435,-0.362 -0.552,-0.62c-0.024,-0.053 -0.046,-0.1 -0.06,-0.13c-0.011,-0.026 -0.016,-0.053 -0.014,-0.081c0.008,-0.093 0.025,-0.307 0.025,-0.307c-0,-0 0.222,-0.152 0.398,-0.273c0.141,-0.097 0.296,-0.174 0.458,-0.228c0.264,-0.087 0.659,-0.218 0.747,-0.248c0.012,-0.004 0.024,-0.008 0.036,-0.011c0.765,-0.237 25.645,-7.934 28.194,-8.723c0.14,-0.043 0.284,-0.069 0.43,-0.078c0.104,-0.006 0.221,-0.013 0.291,-0.018c0.042,-0.002 0.084,-0.003 0.127,-0.003c0.125,0.001 0.394,0.004 0.422,0.004c0.002,-0 0.004,-0 0.005,0c0.004,0.001 0.014,0.002 0.026,0.003Z"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M31.221,72.221l12.463,-5.681l0.245,-0.224c0,-0 -0.026,-0.254 -0.026,-0.26c-0,-0 -0,-0 -0,-0c-0.006,-0.004 -0.29,-0.222 -0.29,-0.222l-15.15,-7.641l-0.318,-0.098c0,-0 -0.112,0.001 -0.222,0.002c-0.138,0.002 -0.274,0.024 -0.406,0.066c-0.047,0.016 -0.092,0.03 -0.121,0.039c-0.022,0.008 -0.044,0.015 -0.066,0.023c-0.696,0.253 -12.349,4.487 -12.349,4.487c-0,-0 -0.091,0.081 -0.15,0.134c-0.03,0.027 -0.048,0.066 -0.048,0.107c-0.001,0.036 -0.001,0.081 -0.001,0.113c-0.001,0.029 0.007,0.057 0.023,0.081c0.034,0.055 0.094,0.151 0.094,0.151c0,0 13.013,7.678 14.91,8.797c0.153,0.09 0.318,0.155 0.49,0.193c0.089,0.02 0.167,0.037 0.167,0.037c0,0 0.073,0.001 0.156,0.002c0.149,0 0.299,-0.02 0.443,-0.061c0.082,-0.024 0.156,-0.045 0.156,-0.045Z"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M10.828,35.935l16.921,0l6.943,16.435c0.385,0 0.697,0.313 0.697,0.697c0,0.385 -0.312,0.698 -0.697,0.698c-0.385,-0 -0.697,-0.313 -0.697,-0.698c-0,-0.384 0.312,-0.697 0.697,-0.697"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <rect
                    x="10.828"
                    y="33.134"
                    width="16.826"
                    height="1.954"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M74.081,46.25l-16.92,0l-6.943,16.435c-0.385,0 -0.697,0.313 -0.697,0.697c-0,0.385 0.312,0.698 0.697,0.698c0.384,-0 0.697,-0.313 0.697,-0.698c-0,-0.384 -0.313,-0.697 -0.697,-0.697"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <rect
                    x="57.255"
                    y="43.449"
                    width="16.826"
                    height="1.954"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M16.125,28.068l16.921,-0l12.189,28.853c0.384,-0 0.697,0.312 0.697,0.697c-0,0.385 -0.313,0.697 -0.697,0.697c-0.385,0 -0.698,-0.312 -0.698,-0.697c0,-0.385 0.313,-0.697 0.698,-0.697"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <rect
                    x="16.125"
                    y="25.267"
                    width="16.826"
                    height="1.954"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
            {/if}
        </svg>
    </span>
    <span slot="icon"> terminal </span>
    <span slot="heading"> Terminal Which Key </span>
    <span slot="text">
        A Tui layer in your terminal to visulize key chords.
    </span>
</Card>
