{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-26.05";
  };

  outputs = {
    self,
    nixpkgs,
    ...
  } @ inputs: let
    inherit (self) outputs;
    inherit (nixpkgs) lib;

    systems = ["x86_64-linux" "aarch64-linux"];
    forEachSystem = lib.genAttrs systems;
    forEachPkgs = f: forEachSystem (sys: f nixpkgs.legacyPackages.${sys});
  in {
    devShell = forEachPkgs (pkgs: (pkgs.mkShell {
      buildInputs = [
        pkgs.nodejs
        pkgs.pnpm
        pkgs.typescript
        pkgs.typescript-language-server
      ];
    }));
  };
}
