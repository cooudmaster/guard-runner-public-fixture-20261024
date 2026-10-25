# Attested Node fixture

This branch tests provider provenance for a synthetic file. It does not deploy
anything or change repository settings, production gates or credentials.

The one-job manual workflow runs Node 22.14.0, installs the dependency-free
lockfile with lifecycle scripts disabled, runs three synthetic tests and writes
the deterministic bytes `fixture-result-v1\n`. A SHA-pinned official attestation
action signs that file using GitHub OIDC and Sigstore. The output and public
bundle are retained for one day. OIDC request tokens and runtime tokens must
never leave the runner or appear in logs/artifacts.

The GitHub-hosted run uses `ubuntu-24.04`. The local run accepts only a label
admitted by the external CRONUS controller for one disposable public VM. Never
route this fixture to a personal persistent or production runner.

Verification must use the official verifier against the exact file, repository,
workflow path, commit and ref, then inspect certificate-backed run/attempt and
runner environment. The file digest alone is insufficient. Negative controls
change one byte, the expected source commit and the expected signer workflow.

A verified signature proves the signing workflow's provenance claim. It does
not prove that tests are sufficient, runtime images are identical, a specific
step produced the file, or the hosted workspace was destroyed. The single-job
source narrows job attribution; it does not create a missing provider claim.
Do not issue a family qualification or authorize production from this fixture.

Rollback: close the branch PR and stop dispatching this branch. The original
main workflow remains unchanged; every run retains its original source SHA.
