

const Faq = () => {
    return (
        <div className="my-10 bg-[#c6ede1]">
            <h2 className="text-center">FAQ</h2>

<div className="join join-vertical w-full">
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" defaultChecked /> 
    <div className="collapse-title text-xl font-medium">
    What are your operating hours?
    </div>
    <div className="collapse-content"> 
      <p> Our online medical shop is open 24/7 for your convenience. Customer support is available Monday to Friday from 9 AM to 6 PM.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    How can I place an order?
    </div>
    <div className="collapse-content"> 
      <p>You can place an order by browsing our product categories, adding items to your cart, and proceeding to checkout. You’ll need to create an account or log in to complete your purchase.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    Do you offer prescription medications?
    </div>
    <div className="collapse-content"> 
      <p>Yes, we offer a wide range of prescription medications. You will need to upload a valid prescription from a licensed healthcare provider when placing your order.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    Are there any discounts available?
    </div>
    <div className="collapse-content"> 
      <p>Yes, we offer various discounts and promotions. Please check our Discount Products section and subscribe to our newsletter for the latest deals.</p>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Faq;