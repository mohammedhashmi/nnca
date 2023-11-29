import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('/users')
export class UserController {
  @Get()
  users() {
    return [
      { name: 'mohammed hashmi', email: 'hashmi.smf@gmail.com' },
      { name: 'khaja', email: 'khaja@gmail.com' },
    ];
  }

  @Post()
  createUser(@Req() req: Request) {
    return {
      name: 'mohammed hashmi',
      email: 'hashmi.smf@gmail.com',
      body: req.body,
      message: 'user created successfully',
    };
  }

  @Get('/:id')
  getUser(@Param() params: { id: number }) {
    return {
      id: params.id,
      name: 'mohammed hashmi',
      email: 'hashmi.smf@gmail.com',
      message: 'user fetched successfully',
    };
  }

  @Patch('/:id')
  updateUser(@Param() params: { id: number }, @Req() req: Request) {
    return {
      id: params.id,
      name: 'mohammed hashmi',
      email: 'hashmi.smf@gmail.com',
      body: req.body,
      message: 'user updated successfully',
    };
  }

  @Delete('/:id')
  deleteUser(@Param() params: { id: number }) {
    return {
      id: params.id,
      name: 'mohammed hashmi',
      email: 'hashmi.smf@gmail.com',
      message: 'user deleted successfully',
    };
  }
}
