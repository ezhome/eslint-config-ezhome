var hasModuleInstalled = function(name) {
    try {
        require.resolve(name);
        return true;
    } catch (err) {
        return false;
    }

};

module.exports = {
    importOrderPluginInstalled: hasModuleInstalled("esling-plugin-import-order"),
    reactPluginInstalled: hasModuleInstalled("eslint-plugin-react")
};
