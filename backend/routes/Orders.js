const {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
} = require("../controllers/Order");
const { protect, admin } = require("../middleware/authMiddleware");
const router = require("express").Router();

router.route("/").post(addOrderItems).get(getOrders);
router.route("/myorders").get(getMyOrders);
router.route("/:id").get(getOrderById);
router.route("/:id/pay").put(updateOrderToPaid);
router.route("/:id/deliver").put(updateOrderToDelivered);
// router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders)
// router.route('/myorders').get(protect, getMyOrders)
// router.route('/:id').get(protect, getOrderById)
// router.route('/:id/pay').put(protect, updateOrderToPaid)
// router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered)

module.exports = router;
