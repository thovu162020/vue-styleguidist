// WARNING: This function’s source is returned by a loader without transpilation.
// Do not use any unsupported by IE11+ features.

/**
 * Return module from a given map (like {react: require('react')}) or throw.
 * We alllow to require modules only from Markdown examples (won’t work dinamically becasue we need to know all required
 * modules in advance to be able to bundle them with the code).
 *
 * @param {object} requireMap
 * @param {string} importPath
 * @param {string} filepath
 * @return {object}
 */
module.exports = function requireInRuntime(requireMap, importPath, filepath) {
	// since the require can be done in a remote file
	var requireLocalMap = (importPath ? requireMap[importPath] : requireMap) || {}
	if (!(filepath in requireLocalMap)) {
		throw new Error(
			'require() statements can be added only by editing a Markdown example file: require("' +
				filepath +
				'")'
		)
	}
	return requireLocalMap[filepath]
}