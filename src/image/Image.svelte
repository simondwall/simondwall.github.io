<script lang="ts">
    import { Pass, Three, OrbitControls, Canvas, type ThrelteContext } from "@threlte/core";
    import {
        CircleGeometry,
        DirectionalLight,
        Group,
        HemisphereLight,
        Mesh,
        MeshStandardMaterial,
        PerspectiveCamera,
    } from "three";
    import { degToRad } from "three/src/math/MathUtils";
    import { BlackAndWhitePass } from "./shaders";

    let ctx: ThrelteContext;
    let camera: PerspectiveCamera;
</script>

<div class="canvas-container">
    <Canvas bind:ctx={ctx}>
        <Three type={PerspectiveCamera} makeDefault position={[5, 5, 5]} fov={24} bind:ref={camera}>
            <OrbitControls maxPolarAngle={degToRad(80)} enableZoom={false} target={{ y: 1 }} />
        </Three>

        {#if camera}
            <Pass pass={new BlackAndWhitePass({ width: 200, height: 200, scene: ctx.scene, camera: camera })} />
        {/if}

        <Three type={DirectionalLight} castShadow position={[3, 12, 10]} />
        <Three type={HemisphereLight} intensity={0.2} />

        <slot />

        <Three type={Group}>
            <Three type={Mesh} receiveShadow rotation.x={degToRad(-90)}>
                <Three type={CircleGeometry} args={[3, 32]} />
                <Three type={MeshStandardMaterial} color="#ffffff" />
            </Three>
        </Three>
    </Canvas>
</div>

<style>
    .canvas-container {
        width: 200px;
        height: 200px;
        margin-right: 10px;
        border: 2px solid black;
        float: left;
    }
</style>
