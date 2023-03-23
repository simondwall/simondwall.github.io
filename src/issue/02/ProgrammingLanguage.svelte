<script lang="ts">
    import { Three } from "@threlte/core";
    import Image from "../../image/Image.svelte";
    import { spring } from "svelte/motion";
    import {
        Group,
        Mesh,
        MeshStandardMaterial,
        SphereGeometry,
    } from "three";

    const scale = spring(1);
</script>


<h2>A New Programming Language is under development!</h2>
<Image>
    <Three type={Group} scale={$scale}>
        <Three type={Mesh} position.y={1} castShadow>
            <Three type={SphereGeometry} />
            <Three type={MeshStandardMaterial} color="#333333" />
        </Three>
    </Three>
</Image>
<p>
    Development on the language "Anweisungs Ausführ Automat" short "AAA"
    (german for Instruction Execution Automaton) has begun. The Language
    aims to be simple to write while having a static type system. Semicolons
    are being omitted in this language and braces are a thing of the past
    while not demanding whitespace like python.
</p>
<h3>Everything is an Expression</h3>
<p>
    Everything is an expression in AAA, which means that everthing returns
    something. Thus everything can be assigned to a variable or passed to
    other functions.
</p>
<h3>No Semicolons required</h3>

<style>
    p {
        text-align: justify;
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
