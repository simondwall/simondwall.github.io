import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass';
import { Camera, HalfFloatType, MeshNormalMaterial, NearestFilter, RGBAFormat, Scene, ShaderMaterial, Vector2, WebGLRenderer, WebGLRenderTarget } from 'three';
import fragmentShader from "./fragment_shader.glsl";
import vertexShader from "./vertex_shader.glsl";

export class BlackAndWhitePass extends Pass {
    fsQuad: FullScreenQuad;
    material: BlackAndWhiteMaterial;
    normalMaterial: MeshNormalMaterial;

    normalBuffer: WebGLRenderTarget;

    scene: Scene;
    camera: Camera;

    constructor({ width, height, scene, camera }: { width: number; height: number; scene: Scene; camera: Camera }) {
		super()

        this.scene = scene;
        this.camera = camera;
		
		// change the material from to our new PencilLinesMaterial
		this.material = new BlackAndWhiteMaterial();
		this.fsQuad = new FullScreenQuad(this.material);

		// set the uResolution uniform with the current canvas's width and height
		this.material.uniforms.uResolution.value = new Vector2(width, height)

        const normalBuffer = new WebGLRenderTarget(width, height)

        normalBuffer.texture.format = RGBAFormat
        normalBuffer.texture.type = HalfFloatType
        normalBuffer.texture.minFilter = NearestFilter
        normalBuffer.texture.magFilter = NearestFilter
        normalBuffer.texture.generateMipmaps = false
        normalBuffer.stencilBuffer = false
        this.normalBuffer = normalBuffer

        this.normalMaterial = new MeshNormalMaterial()
	}

    dispose() {
        this.material.dispose();
        this.fsQuad.dispose();
    }

	render(renderer: WebGLRenderer, writeBuffer: WebGLRenderTarget, readBuffer: WebGLRenderTarget) {
        renderer.setRenderTarget(this.normalBuffer)
        const overrideMaterialValue = this.scene.overrideMaterial

        this.scene.overrideMaterial = this.normalMaterial
        renderer.render(this.scene, this.camera)
        this.scene.overrideMaterial = overrideMaterialValue

        this.material.uniforms.uNormals.value = this.normalBuffer.texture;
        this.material.uniforms.tDiffuse.value = readBuffer.texture;

		if (this.renderToScreen) {
			renderer.setRenderTarget(null);
            this.fsQuad.render(renderer);
		} else {
			renderer.setRenderTarget(writeBuffer)
			if (this.clear) {
                renderer.clear();
            }
            this.fsQuad.render(renderer);
		}
	}
};

export class BlackAndWhiteMaterial extends ShaderMaterial {
	constructor() {
		super({
			uniforms: {
				// we'll keep the naming convention here since the CopyShader
				// also used a tDiffuse texture for the currently rendered scene.
				tDiffuse: { value: null },
				// we'll pass in the canvas size here later
				uResolution: { value: new Vector2(1, 1) },
                uNormals: { value: null },
			},
			fragmentShader: fragmentShader,
			vertexShader: vertexShader,
		})
	}
}

