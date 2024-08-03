<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Products::orderBy('id','Desc')->paginate(5);

        return inertia('Products/index',[
            'products' => $products,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Products/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'stock' => 'required',
            'description' => 'required',
        ]);

        $product = Products::create([
            'name' => $validated['name'],
            'stock' => $validated['stock'],
            'description' => $validated['description'],
        ]);

        return redirect()->route('products.index')->with('message','Product Created Successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Products $products)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $product = Products::findOrFail($id);
        return inertia('Products/edit',[
            'product' => $product,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $product = Products::findOrFail($id);
        $validated = $request->validate([
            'name' => 'required',
            'stock' => 'required',
            'description' => 'required',
        ]);

        $product->update($validated);

        return redirect()->route('products.index')->with('message','Product Updated Successfully');


    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
       $product = Products::findOrFail($id);
       $product->delete();
       return redirect()->route('products.index')->with('message','Product Deleted Successfully');
    }
}
