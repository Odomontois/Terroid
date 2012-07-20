function TerroidUI(
    id,
    path
) {
    WorldUI.apply(
        this,
        [
            id,
            path,
            400
        ]
    );
    this.setStartContext(
        this.setWorldContext(
            new TerroidContext()
        )
    );
}
