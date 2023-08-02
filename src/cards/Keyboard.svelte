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
                    d=
                    "M61.163,68.208l0.81,-0.784l0.805,0.75"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d=
                    "M56.79,64.319l-0.505,-1.804l3.859,-2.274l3.617,3.968l-1.975,1.432l-2.483,1.261l-2.513,-2.583Z"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d=
                    "M58.898,70.287l2.404,-1.934l-1.65,-1.59"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d=
                    "M65.855,71.123l0.144,0.157l-2.196,1.904"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d=
                    "M69.318,68.912l-3.636,2.284l-2.779,-2.669l-0.537,-1.568l3.69,-2.802l3.923,3.996"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M63.246,57.922l5.548,-0.591l1.196,5.284l-1.626,0.425l-3.539,0.245l-0.444,-0.143l-1.135,-5.22Z"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M81.676,37.115l0.133,-0.705l3.102,0.294"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M80.971,40.717l-0.165,1.058l4.413,0.254l1.203,-0.468l0.814,-3.674l-0.172,-0.206"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M91.909,45.65l-4.78,-0.236l0.969,-5.375l3.401,0.331"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M86.879,50.125l0.075,-4.166l4.912,0.27"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M87.1,51.127l4.332,0.14"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M89.064,56.867l2.481,0.04"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M87.198,51.727l4.261,-0.106"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M86.978,52.295l0.238,0.997"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M80.884,47.618l4.284,0.123l1.256,-1.048l-0.085,-3.527l-1.266,-0.632l-4.237,-0.209"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M81.369,50.983l0.293,1.381"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M81.015,48.229l5.371,0.015l0.849,3.653l-0.998,1.363"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M76.425,41.449l3.183,0.189l1.167,0.652l-0.006,3.485l-1.271,0.962l-2.682,-0.139"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M76.17,47.937l-0.088,-0.921l4.631,0.14l0.794,3.567l-0.913,1.564"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M83.07,56.783l0.755,1.926l4.482,-0.053l0.756,-1.761l-1.44,-3.531l-3.096,-0.004l-1.841,0.325"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M76.74,53.058l1.657,4.549l4.28,-0.056l0.78,-1.697l-1.356,-3.467l-2.771,-0.129l-2.291,0.477"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M71.505,46.967l-0.016,0.365l3.841,0.146l1.472,-0.9l0.024,-3.78l-1.242,-0.684l-3.871,-0.231"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M72.535,52.673l0.113,0.627l3.884,-0.063l1.317,-1.449l-0.762,-3.704l-4.741,-0.401l-0.008,0.136"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M76.573,36.056l0.074,-0.337l3.975,0.268l1.05,1.135l-0.678,3.584l-1.229,0.476l-2.617,-0.233"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M72.727,36.112l0.115,-0.434l4.046,0.475l1.06,1.228l-0.871,3.801l-1.259,0.432l-3.903,-0.332l0.08,-0.304"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M66.998,46.952l0.049,-5.633l3.896,0.297l1.525,0.668l-0.006,3.961l-1.399,1.006l-4.065,-0.299Z"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M66.952,40.68l1.364,-5.503l3.895,0.442l1.217,1.334l-0.937,3.813l-1.123,0.416l-4.416,-0.502Z"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M68.006,53.131l-1.074,-5.417l5.389,0.07l0.946,3.818l-1.168,1.604l-4.093,-0.075Z"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M58.674,55.088c0,0 -3.112,-4.695 -0.599,-18.263l5.334,-4.652l8.466,1.358l10.331,0.991l2.679,2.177l1.423,0.144l0.742,0.835l1.253,0.015l3.254,2.678l1.305,0.161l0.878,1.334c-0,0 -0.495,1.219 -0.802,3.392c-0.037,0.257 -1.02,0.426 -1.02,0.426l-0.053,0.527c0,0 0.907,0.567 0.893,0.78c-0.068,1 -0.084,2.13 -0.01,3.375c0.017,0.282 -1.336,0.87 -1.336,0.87l0.055,0.363c-0,-0 1.402,0.208 1.423,0.387c0.123,1.06 0.312,2.188 0.586,3.377l-0.877,1.522l-1.046,0.013l-2.942,2.837l-1.241,0.112l-0.129,0.306l-1.896,2.996l-5.208,0.281l-9.975,4.531l-0.827,0.92l0.01,0.685l-3.69,3.06l-1.891,0.593l-1.223,1.009l-1.036,-0.042l-2.466,-2.634l-0.062,-1.309l-1.579,1.213l-2.895,-2.373l-0.401,-1.784l0.725,-0.607l-0.391,-2.267l2.186,-3.917l0.008,-1.859l-0.438,-1.106l2.482,-2.455Z"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M57.127,64.692l-2.3,2"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M80.556,47.096l0.013,-1.109"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M69.934,58.493l5.993,-0.469l0.891,5.404l-1.361,0.352l-3.779,0.215l-0.802,-0.229l-0.942,-5.273Z"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M35.984,68.208l-0.809,-0.784l-0.806,0.75"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M40.357,64.319l0.506,-1.804l-3.86,-2.274l-3.617,3.968l1.975,1.432l2.483,1.261l2.513,-2.583Z"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M38.249,70.287l-2.404,-1.934l1.651,-1.59"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M31.292,71.123l-0.144,0.157l2.196,1.904"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M27.829,68.912l3.637,2.284l2.778,-2.669l0.537,-1.568l-3.689,-2.802l-3.924,3.996"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M33.901,57.922l-5.547,-0.591l-1.196,5.284l1.626,0.425l3.539,0.245l0.443,-0.143l1.135,-5.22Z"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M15.472,37.115l-0.134,-0.705l-3.102,0.294"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M16.176,40.717l0.165,1.058l-4.413,0.254l-1.202,-0.468l-0.815,-3.674l0.172,-0.206"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M5.238,45.65l4.781,-0.236l-0.97,-5.375l-3.401,0.331"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M10.268,50.125l-0.075,-4.166l-4.911,0.27"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M10.048,51.127l-4.333,0.14"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M8.084,56.867l-2.481,0.04"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M9.949,51.727l-4.261,-0.106"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M10.169,52.295l-0.238,0.997"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M16.263,47.618l-4.284,0.123l-1.256,-1.048l0.085,-3.527l1.266,-0.632l4.237,-0.209"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M15.778,50.983l-0.293,1.381"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M16.132,48.229l-5.37,0.015l-0.85,3.653l0.998,1.363"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M20.722,41.449l-3.183,0.189l-1.166,0.652l0.005,3.485l1.272,0.962l2.681,-0.139"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M20.977,47.937l0.088,-0.921l-4.631,0.14l-0.794,3.567l0.913,1.564"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M14.077,56.783l-0.755,1.926l-4.481,-0.053l-0.756,-1.761l1.439,-3.531l3.097,-0.004l1.84,0.325"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M20.408,53.058l-1.658,4.549l-4.279,-0.056l-0.781,-1.697l1.356,-3.467l2.771,-0.129l2.292,0.477"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M25.642,46.967l0.016,0.365l-3.841,0.146l-1.471,-0.9l-0.024,-3.78l1.242,-0.684l3.87,-0.231"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M24.612,52.673l-0.113,0.627l-3.883,-0.063l-1.318,-1.449l0.762,-3.704l4.741,-0.401l0.008,0.136"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M20.574,36.056l-0.074,-0.337l-3.975,0.268l-1.05,1.135l0.678,3.584l1.229,0.476l2.617,-0.233"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M24.42,36.112l-0.114,-0.434l-4.047,0.475l-1.059,1.228l0.871,3.801l1.259,0.432l3.902,-0.332l-0.08,-0.304"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M30.149,46.952l-0.049,-5.633l-3.896,0.297l-1.525,0.668l0.006,3.961l1.399,1.006l4.065,-0.299Z"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />

                <path
                    d="M30.196,40.68l-1.365,-5.503l-3.895,0.442l-1.217,1.334l0.937,3.813l1.123,0.416l4.417,-0.502Z"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M29.141,53.131l1.075,-5.417l-5.39,0.07l-0.946,3.818l1.169,1.604l4.092,-0.075Z"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M38.473,55.088c-0,0 3.112,-4.695 0.599,-18.263l-5.334,-4.652l-8.466,1.358l-10.33,0.991l-2.68,2.177l-1.422,0.144l-0.743,0.835l-1.253,0.015l-3.254,2.678l-1.305,0.161l-0.878,1.334c0,0 0.496,1.219 0.803,3.392c0.036,0.257 1.02,0.426 1.02,0.426l0.052,0.527c0,0 -0.907,0.567 -0.893,0.78c0.068,1 0.084,2.13 0.01,3.375c-0.016,0.282 1.336,0.87 1.336,0.87l-0.054,0.363c-0,-0 -1.403,0.208 -1.424,0.387c-0.123,1.06 -0.312,2.188 -0.586,3.377l0.877,1.522l1.046,0.013l2.943,2.837l1.24,0.112l0.13,0.306l1.895,2.996l5.208,0.281l9.975,4.531l0.827,0.92l-0.01,0.685l3.69,3.06l1.891,0.593l1.223,1.009l1.036,-0.042l2.467,-2.634l0.062,-1.309l1.578,1.213l2.895,-2.373l0.401,-1.784l-0.724,-0.607l0.39,-2.267l-2.185,-3.917l-0.009,-1.859l0.439,-1.106l-2.483,-2.455Z"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M40.02,64.692l2.301,2"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M16.591,47.096l-0.013,-1.109"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
                <path
                    d="M27.214,58.493l-5.994,-0.469l-0.891,5.404l1.362,0.352l3.778,0.215l0.802,-0.229l0.943,-5.273Z"
                    in:draw={{ duration: 2500 }}
                    fill="none"
                    stroke="var(--accent)"
                    stroke-width="1px"
                />
            {/if}
        </svg>
    </span>
    <span slot="icon">keyboard</span>
    <span slot="heading">Custom Keyboard</span>
    <span slot="text">I have built a dactyl manuform for myself and am in the process of creating my completely own keyboard.</span>
</Card>
