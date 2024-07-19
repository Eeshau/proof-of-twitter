import { generateProof } from '@zk-email/helpers/dist/zkp';

self.onmessage = async function (e) {
  const { input, circuitArtifactsUrl, circuitName } = e.data;

  try {
    const { proof, publicSignals } = await generateProof(input, circuitArtifactsUrl, circuitName);
    self.postMessage({ proof, publicSignals, error: null });
  } catch (error) {
    self.postMessage({ proof: null, publicSignals: null, error: error.message });
  }
};
