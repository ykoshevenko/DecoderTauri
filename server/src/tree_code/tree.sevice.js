export default class AddTree {
    newFormate(obj) {
        return Object.entries(obj).map(([key, value]) => ({[key]: value}))
        // [{b:7}, {a:8} ...]
    }
}