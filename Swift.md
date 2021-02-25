https://github.com/AlwaysRightInstitute/SwiftyWasmer#wasmer-installation-for-swift

curl https://get.wasmer.io -sSfL | sh

wasmer config --pkg-config > /usr/local/lib/pkgconfig/wasmer.pc
+ edits

mv ~/.wasmer/lib/libwasmer.dylib ~/.wasmer/lib/libwasmer.dylib-away

brew install swift-sh

https://github.com/swiftwasm/swift/releases/download/swift-wasm-5.3.1-RELEASE/swift-wasm-5.3.1-RELEASE-macos_x86_64.pkg

git clone https://github.com/AlwaysRightInstitute/cows
cd cows
swift build --triple wasm32-unknown-wasi
du -sh .build/debug/vaca.wasm

<!-- This didn't work -->
swift run swasi-run vaca.wasm
