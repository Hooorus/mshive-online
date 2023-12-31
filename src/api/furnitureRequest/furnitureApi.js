import server from "@/api/basicRequest";


//----------------------------POST请求区----------------------------

//根据furniture id list 使用 JSON 查询furniture数据（在stuff中渲染furniture列表用）
export function searchFurnitureListByFurnitureUUIds(userUUId, data) {
    return server.post(
        `/furniture/${userUUId}/search_furniture_list_by_furniture_uuids`,
        data,
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            },
        }
    )
}

//插入一条家具数据，需要：用户UUID、待插入的JSON数据
export function insertOneFurniture(userUUId, data) {
    return server.put(
        `/furniture/${userUUId}/insert_one`,
        //post JSON
        //data写在config前，data为一个完整的json数据
        data,
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            },
        }
    )
}

//更新一条家具数据，需要：用户UUID、待更新的JSON数据
export function updateOneFurniture(userUUId, data) {
    return server.patch(
        `/furniture/${userUUId}/update_one`,
        //post JSON
        //data写在config前，data为一个完整的json数据
        data,
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            },
        }
    )
}

//删除一条家具数据，需要：用户UUID、待删除的家具UUID
export function deleteOneFurniture(userUUId, furnitureUUId) {
    return server.delete(
        `/furniture/${userUUId}/delete_one`,
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Content-Type': 'multipart/form-data'
            },
            //post form-data
            //data写在和headers同级的config内，并且需要以data为根，内部可添加多个KV
            data: {
                furniture_uuid: furnitureUUId
            }
        }
    )
}

//----------------------------GET请求区----------------------------

//根据家具UUID搜索一个furniture信息
export function searchOneFurniture(userUUId, furnitureUUId) {
    return server.get(
        `/furniture/${userUUId}/search_one`,
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            },
            //get query param
            //params写在和headers同级的config内
            params: {
                furniture_id: furnitureUUId
            }
        }
    )
}

//使用快照滚轮分页查询搜索furniture信息
export function searchListFurniture(userUUId, furnitureUUId, searchSize) {
    return server.get(
        `/furniture/${userUUId}/search_list`,
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            },
            //get query param
            //params写在和headers同级的config内
            params: {
                last_seen_furniture_id: furnitureUUId,
                search_size: searchSize
            },
        }
    )
}

//搜索所有furniture信息
export function searchAllFurniture(userUUId) {
    return server.get(
        `/furniture/${userUUId}/search_all`,
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            },
            //get query param
            //params写在和headers同级的config内
            params: {},
        })
}

//搜索furniture标签，返回List[<furnitureUUId>: <家具名字>]，注意不是attribute!!! 家具tag用
export function searchFurnitureTag(userUUId) {
    return server.get(
        `/furniture/${userUUId}/search_tag`,
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            },
            //get query param
            //params写在和headers同级的config内
            params: {},
        })
}
