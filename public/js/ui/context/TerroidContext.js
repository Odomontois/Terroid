function TerroidContext() {
    WorldContext.apply(
        this,
        [new TerroidWorld()]
    );
}
