
/**
 * Callback method for when solution is closed, force boolean argument tells if this is a force (not stoppable) close or not.
 *
 * @param {Boolean} force if false then solution close can be stopped by returning false
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"C7C3F247-0DF6-4EF0-A4F7-B785B53811AF"}
 */
function onSolutionClose(force) {
	if (scopes['codeCoverageReporting']) {
		scopes['codeCoverageReporting'].storeCoverageData()
	}
	return true
}
