var hasModuleInstalled = function(name) {
    try {
        require.resolve(name);
        return true;
    } catch (err) {
        return false;
    }

};

module.exports = {
    importPluginInstalled: hasModuleInstalled("eslint-plugin-import"),
    reactPluginInstalled: hasModuleInstalled("eslint-plugin-react")
};
