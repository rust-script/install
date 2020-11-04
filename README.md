# Install rust-script action
This GitHub Action installs rust-script for use in CI.

It's a little faster than doing `cargo install rust-script` since it downloads a pre-built binary.

## Inputs

### `version`

**Optional** The version of rust-script to install. Default `"latest"`.
