export function getTotalItemsActive(totalItemsTODO){
    let allActives = totalItemsTODO.filter(item => item.estado == 1);
    return allActives.length;
}