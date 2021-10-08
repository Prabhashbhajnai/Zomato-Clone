// Libraries
import express from "express";
import passport from "passport";

// Database model
import {MenuModel, ImageModel} from "../../Database/allModels";

// validation
import { ValidateMenuId, ValidateImageId } from "../../Validation/menu";

const Router = express.Router();

/* 
    Route:          /list
    Description:    Get all menu based on id 
    Params:         _id
    Access:         Public
    Method :        GET
*/
Router.get("/list/:_id", async(req, res) => {
    try {
        // await ValidateMenuId(req.params);

        const {_id} = req.params;
        const menus = await MenuModel.findById(_id);

        return res.json({menus});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

/* 
    Route:          /image
    Description:    Get all menu images based on id 
    Params:         _id
    Access:         Public
    Method :        GET
*/
Router.get("/image/:_id", async (req, res) => {
    try {
        // await ValidateImageId(req.params);

        const {_id} = req.params;
        const menus = await ImageModel.findOne(_id);

        return res.json({menus});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

/* 
    Route:          /new
    Description:    add new menu
    Params:         none
    Access:         Public
    Method :        GET
*/
Router.post("/new", async (req, res) => {
    try {
      const { menuData } = req.body;
  
      if (menuData._id) {
        const updateMenu = await MenuModel.findByIdAndUpdate(
          menuData._id,
          {
            $push: {
              menu: { $each: menuData.menus },
            },
          },
          { new: true }
        );
  
        return res.json({ menu: updateMenu });
      }
  
      const createNewMenu = await MenuModel.create(menuData);
  
      return res.json({ menu: createNewMenu });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

export default Router;