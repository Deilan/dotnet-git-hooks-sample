module.exports = {
    hooks: {
        "pre-commit": "dotnet test",
        "pre-push": "dotnet test",
        "commit-msg": "cross-env-shell commitlint -e ${HUSKY_GIT_PARAMS}"
    }
}
