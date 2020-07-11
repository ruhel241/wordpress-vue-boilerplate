<template>
    <div class="plugin_name-all-posts">
        <div class="plugin_name-table"> 
            <div class="title">
                <h1> All Posts </h1>
            </div>
            <div class="plugin_name-action">
                <div class="plugin_name-search"> 
                    <el-input v-model="search" placeholder="search" size="small">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </div>
                <div class="button-section">
                    <router-link :to="{path: '/'}" class="el-button el-button--primary el-button--small" size="medium">
                        Add New Post
                    </router-link>
                </div>
            </div>
        </div>

        <el-table :data="tableData" border style="width: 100%">
            <el-table-column
                prop="id"
                label="id"
                width="60">
            </el-table-column>
            <el-table-column
                prop="title"
                label="Title"
                >
            </el-table-column>
            <el-table-column
                prop="description"
                label="Description"
               >
            </el-table-column>
            <el-table-column label="ShortCode" > 
                <el-tooltip effect="dark"
                            content="Click to copy shortcode"
                            title="Click to copy shortcode"
                            placement="top">
                    <code class="shortcode"
                            :data-clipboard-text='`[plugin_name_post id="1"]`'>
                        <i class="el-icon-document"></i> [plugin_name_post id="1"]
                    </code>
                </el-tooltip>
            </el-table-column>
            <el-table-column
                prop="date"
                label="Date">
            </el-table-column>
            <el-table-column label="Action"> 
                <template>
                    <el-button type="primary" icon="el-icon-edit" circle></el-button>
                    <el-button type="success" icon="el-icon-view" circle></el-button>
                    <el-button type="danger" icon="el-icon-delete" circle @click="dialogVisible = true"></el-button>
                </template>
            </el-table-column>
        </el-table>


        <div class="plugin_name-pagination">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="page_number"
                :page-size="per_page"
                :page-sizes="pageSizes"
                layout="total, sizes, prev, pager, next"
                :total="total"
                :background="true">
            </el-pagination>
        </div>

        <el-dialog
            title="Are You Sure, You want to delete this post?"
            :visible.sync="dialogVisible"
            width="30%">
            <div class="modal_body">
                <p>All the data assoscilate with this post will be deleted</p>
                <p>You are deleting post id: 1. <br/>
                    Form Title: <b>  Demo Title  </b>
                </p>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="deletePost">Confirm</el-button>
            </span>
        </el-dialog>       
    </div>
</template>

<script>
  export default {
      name: 'AllPosts',

        data(){
            return {
                tableData: [
                    {
                        id: '1',
                        title: 'Tom',
                        description: 'Tom',
                        date: '2016-05-03',
                    }, 
                    {
                        id: '2',
                        title: 'Tom',
                        description: 'Tom',
                        date: '2016-05-03',
                    }, 
                    {
                        id: '3',
                        title: 'Tom',
                        description: 'Tom',
                        date: '2016-05-03',
                    }, 
                    {
                        id: '4',
                        title: 'Tom',
                        description: 'Tom',
                        date: '2016-05-03',
                    }
                ],
                search:"",
                dialogVisible: false,
                total: 0,
                pageSizes: [10, 20, 30, 40, 50, 100, 200],
                per_page: 10,
                page_number: 1,
            }
        },

        methods: {
            // pagination
            handleSizeChange(val) {
                this.per_page = val;
            },
            handleCurrentChange(val) {
                this.page_number = val;
            },

            deletePost(){
                this.dialogVisible = false;
            }
        }
    }
</script>


<style scoped>

.plugin_name-all-posts{
    margin: 0 20px 0 0;
}

.plugin_name-table{
    display: flex;
    justify-content: space-between;
    width: auto;
    border-bottom: 1px solid #e3e8ee;
    clear: both;
    overflow: hidden;
    margin: 0;
    padding: 5px 15px;
    background-color: #f7fafc;
    font-weight: bold;
    color: #697386;
}
        
.plugin_name-action {
    display: flex;
    justify-content: center;
    align-items: center;
}

.plugin_name-search{
    margin-right: 10px;
}
.plugin_name-pagination{
 text-align: right;
 margin-top:20px   
}


.shortcode{
    cursor: context-menu;
}

.el-button, a {
    text-decoration: none;
}
</style>
