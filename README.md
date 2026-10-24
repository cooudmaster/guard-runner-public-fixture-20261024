# Disposable runner public fixture

Synthetic test repository. Contains no product source, customer information,
credentials or deployment commands.

`public-enrollment.yml` is manually dispatched with a one-use runner label. A
reviewed operator starts a disposable Linux VM for the exact provider job and
collects job identity, isolation checks, receipt and destruction evidence.

`fork-semantics.yml` runs only on GitHub-hosted Ubuntu. It reads the provider event
without checking out contributor code. It proves event identity for the launcher's
negative fork-admission test; it does not certify local fork execution. GitHub's
approval requirements remain in force.

Never attach personal persistent runners or a production runner group here.
