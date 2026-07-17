import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products: Product[] = [];
  isLoading: boolean = true;
  errorMessage: string | null = null;
  deletingId: number | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.isLoading = true;
    this.errorMessage = null;

    this.http.get<Product[]>('http://localhost:3000/products').subscribe({
      next: (data) => {
        this.products = data;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.errorMessage = 'Không thể kết nối máy chủ!';
      },
    });
  }

  deleteProduct(id: number) {
    const confirmDelete = confirm('Bạn chắc chắn muốn xóa sản phẩm này?');
    if (!confirmDelete) return;

    this.http.delete(`http://localhost:3000/products/${id}`).subscribe({
      next: () => {
        this.products = this.products.filter(
          (product) => product.id !== id
        );
        alert('Xóa sản phẩm thành công!');
      },
      error: () => {
        alert('Xóa sản phẩm thất bại!');
      },
    });
  }
}