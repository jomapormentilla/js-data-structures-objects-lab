// Write your solution in this file!

const driver = Object.assign({})

function updateDriverWithKeyAndValue( obj, key, value ) {
    let newDriver = Object.assign({}, obj, { [key]: value })
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue( obj, key, value ) {
    let newDriver = Object.assign(obj, { [key]: value })
    return newDriver
}

function deleteFromDriverByKey( obj, key ) {
    let newDriver = Object.assign({}, obj)
    delete newDriver[key]
    return newDriver
}

function destructivelyDeleteFromDriverByKey( obj, key ) {
    let newDriver = Object.assign( obj )
    delete newDriver[key]
    return newDriver
}