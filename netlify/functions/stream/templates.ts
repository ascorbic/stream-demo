export const HTML = `<html><head><title>Stream demo</title></head><body><div id="root">Loading</div>`

export const updateBlock = (block: string) => `
<script>document.getElementById('root').innerHTML = '${block.replace(`'`, `\'`)}'</script>
`