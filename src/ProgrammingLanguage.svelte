<script lang="ts">
    import { Pass, Three, OrbitControls, Canvas } from '@threlte/core';
    import { onMount } from 'svelte';
    import { spring } from 'svelte/motion';
    import { BoxGeometry, CircleGeometry, Color, DirectionalLight, Group, HemisphereLight, Mesh, MeshStandardMaterial, PerspectiveCamera, ShaderMaterial, SphereGeometry } from 'three';
    import { degToRad } from 'three/src/math/MathUtils'
    import { BlackAndWhitePass } from './shaders';

    const scale = spring(1);
</script>

<div>
    <h2>A New Programming Language is under development!</h2>
    <div class=canvas-container>
        <Canvas>
            <Pass pass={new BlackAndWhitePass({width: 200, height: 200})}/>
            <Three type={PerspectiveCamera} makeDefault position={[5, 5, 5]} fov={24} >
                <OrbitControls maxPolarAngle={degToRad(80)} enableZoom={false} target={{ y: 0.5 }} />
            </Three>

            <Three type={DirectionalLight} castShadow position={[3, 12, 10]} />
            <Three type={HemisphereLight} intensity={0.2} />

            <Three type={Group} scale={$scale}>
                <Three type={Mesh} position.y={0.5} castShadow>
                    <Three type={BoxGeometry} />
                    <Three type={MeshStandardMaterial} color="#333333" />
                </Three>
            </Three>

            <Three type={Group}>
                <Three type={Mesh} receiveShadow rotation.x={degToRad(-90)}>
                    <Three type={CircleGeometry} args={[3, 32]} />
                    <Three type={MeshStandardMaterial} color="#ffffff" />
                </Three>
            </Three>
        </Canvas>
    </div>

    <p>
        Development on the language "Anweisungs Ausführ Automat" short "AAA" (german
        for Instruction Execution Automaton) has begun. The Language aims to be
        simple to write while having a static type system. Semicolons are being
        omitted in this language and braces are a thing of the past while not
        demanding whitespace like python.
    </p>
    <h3>Everything is an Expression</h3>
    <p>
        Everything is an expression in AAA, which means that everthing returns
        something. Thus everything can be assigned to a variable or passed to
        other functions.
    </p>
    <h3>No Semicolons required</h3>
</div>

<style>
    p {
        text-align: justify;
    }

    .canvas-container {
        width: 200px;
        height: 200px;
        margin-right: 10px;
        border: 2px solid black;
        float: left;
    }

    h2 {
        text-align: center;
        border-top: 2px solid black;
        border-bottom: 2px solid black;
    }

    h3 {
        text-align: center;
        border-top: 2px solid black;
        border-bottom: 2px solid black;
    }
</style>
