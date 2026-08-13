import React from 'react';
import { ShoppingBag, Sparkles, Check, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/spaData';
import { Product, CartItem } from '../types';

interface ShopProps {
  cart: CartItem[];
  onAddToCart: (product: Product) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveFromCart: (productId: string) => void;
  isCartOpen: boolean;
  onCloseCart: () => void;
}

export const Shop: React.FC<ShopProps> = ({
  cart,
  onAddToCart,
  onUpdateQuantity,
  onRemoveFromCart,
  isCartOpen,
  onCloseCart,
}) => {
  const cartSubtotal = cart.reduce((sum, item) => sum + item.product.priceGBP * item.quantity, 0);

  return (
    <section id="shop" className="py-20 bg-[#FAF7F2] relative border-t border-[#E8DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#8C7355] text-xs font-semibold tracking-widest uppercase bg-[#EADCC9]/60 px-4 py-1.5 rounded-full border border-[#CBB292]">
            <ShoppingBag className="w-3.5 h-3.5 text-amber-700" />
            <span>Take-Home Rituals</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2015] font-light">
            Botanical Scalp & Nail Care Shop
          </h2>
          <p className="text-sm text-[#6E5A44] font-light">
            Formulated in small batches using raw honey extracts, organic botanicals, and cold-pressed essential oils used in our studio treatments.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-[#F5EBE0] rounded-3xl p-6 border border-[#E8DFD1] shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#EADCC9]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 left-3 bg-[#FAF7F2] text-[#3D2E1E] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border border-[#E8DFD1]">
                    {product.volume}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-[#2C2015]">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#7A644D] mt-1 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {product.ingredients && (
                  <div className="text-[11px] text-[#8C7355] space-y-1">
                    <strong className="block font-semibold uppercase tracking-wider text-[#3D2E1E]">Key Botanicals:</strong>
                    <p className="line-clamp-1">{product.ingredients.join(' • ')}</p>
                  </div>
                )}
              </div>

              <div className="pt-6 mt-4 border-t border-[#E8DFD1] flex items-center justify-between">
                <span className="text-xl font-serif font-bold text-[#3D2E1E]">
                  £{product.priceGBP} GBP
                </span>

                <button
                  onClick={() => onAddToCart(product)}
                  className="bg-[#4A3B2C] hover:bg-[#32271C] text-[#F9F5EF] px-4 py-2.5 rounded-xl text-xs font-medium uppercase tracking-wider transition-all shadow-xs flex items-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-amber-300" />
                  <span>Add to Cart</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Slide-Over Shopping Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
          <div className="bg-[#FAF7F2] w-full max-w-md h-full shadow-2xl p-6 flex flex-col justify-between border-l border-[#E8DFD1] animate-in slide-in-from-right duration-300">
            
            {/* Cart Header */}
            <div>
              <div className="flex items-center justify-between border-b border-[#E8DFD1] pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[#8C7355]" />
                  <h3 className="font-serif text-xl font-medium text-[#2C2015]">Your Botanical Cart</h3>
                </div>
                <button
                  onClick={onCloseCart}
                  className="p-1.5 rounded-full bg-[#EADCC9] text-[#4A3B2C] hover:bg-[#CBB292]"
                >
                  ✕
                </button>
              </div>

              {/* Cart List */}
              {cart.length === 0 ? (
                <div className="text-center py-12 space-y-3">
                  <ShoppingBag className="w-12 h-12 text-[#CBB292] mx-auto" />
                  <p className="text-sm text-[#7A644D]">Your botanical cart is currently empty.</p>
                </div>
              ) : (
                <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-center justify-between bg-[#F5EBE0] p-3 rounded-2xl border border-[#E8DFD1]"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-12 h-12 rounded-xl object-cover border border-[#CBB292]"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <h4 className="text-xs font-bold text-[#3D2E1E] line-clamp-1">{item.product.name}</h4>
                          <span className="text-xs text-[#8C7355] font-serif font-bold">£{item.product.priceGBP} GBP</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex items-center border border-[#CBB292] rounded-lg bg-white">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 text-[#6E5A44]"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-bold text-[#3D2E1E]">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 text-[#6E5A44]"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveFromCart(item.product.id)}
                          className="p-1.5 text-red-700 hover:bg-red-50 rounded-lg"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Footer */}
            {cart.length > 0 && (
              <div className="pt-6 border-t border-[#E8DFD1] space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase font-bold tracking-wider text-[#7A644D]">Subtotal</span>
                  <span className="font-serif text-2xl font-bold text-[#2C2015]">£{cartSubtotal} GBP</span>
                </div>

                <button
                  onClick={() => {
                    alert('Order submitted! Thank you for purchasing Honey & Bloom botanicals.');
                    onCloseCart();
                  }}
                  className="w-full bg-[#4A3B2C] hover:bg-[#32271C] text-[#F9F5EF] py-3.5 rounded-full text-xs font-medium uppercase tracking-widest shadow-md flex items-center justify-center gap-2"
                >
                  <span>Checkout Order</span>
                  <ArrowRight className="w-4 h-4 text-amber-300" />
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
