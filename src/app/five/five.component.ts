import { Component, OnInit } from '@angular/core';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})
export class FiveComponent implements OnInit {

  fileList = [
    {
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ];
  previewImage = '';
  previewVisible = false;

  fileListMore = [
    {
      uid: 1,
      name: '海绵宝宝.png',
      status: 'done',
      response: 'Server Error 500', // custom error message to show
      url: './assets/img/haimianbaobao.jpg'
    },
    {
      uid: 2,
      name: '马里奥.png',
      status: 'done',
      url: './assets/img/maliao.jpg'
    },
    {
      uid: 3,
      name: '风景.png',
      status: 'error',
      response: 'Server Error 500', // custom error message to show
      url: './assets/img/fengjing.jpg'
    }
  ];

  defaultFileList = [
    {
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: -2,
      name: 'yyy.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ];
  fileList1 = [...this.defaultFileList];
  fileList2 = [...this.defaultFileList];

  constructor(private msg: NzMessageService) { }

  ngOnInit() {
  }

  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
    console.log(file);
  }
  save() {

  }
  photoRemove() {
    console.log('已删除');
  }
}
