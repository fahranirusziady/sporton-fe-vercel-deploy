import PaymentOptions from "../components/payment/payment-options";

const Payment = () => {
  return (
    <main className="bg-gray-100 min-h-[80vh]">
      <div className="max-w-5xl mx-auto py-20">
        <h1 className="text-5xl font-bold text-center mb-11">
          Payment
        </h1>
        <PaymentOptions />
      </div>
    </main>
  );
};

export default Payment;