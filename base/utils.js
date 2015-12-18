var hasModuleInstalled = function(name) {
    try {
        require.resolve(name);
        return true;
    } catch (err) {
        return false;
    }

};

module.exports = {
    reactPluginInstalled: hasModuleInstalled("eslint-plugin-react")
};
